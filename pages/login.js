import React, { useEffect, useState } from "react";
import logo from "./Images/sampleLogo.png";
import { Wrapper } from "../styles/login";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { Select, Space } from "antd";
import swal from "sweetalert";
import firebase from "../config";
const Login = () => {
  const myFunction = () => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () =>
      container.classList.add("right-panel-active")
    );

    signInButton.addEventListener("click", () =>
      container.classList.remove("right-panel-active")
    );
  };
  const options = [
    {
      value: "1",
      label: "Example 1",
    },
    {
      value: "2",
      label: "Example 2",
    },
    {
      value: "3",
      label: "Example 3",
    },
  ];
  useEffect(() => {
    myFunction();
  });

  //   const handleChange = (value) => {
  //     console.log(`selected ${value}`);
  //   };
  const [roles, setRoles] = useState([]);
  const [locations, setLocation] = useState([]);
  const [area, setArea] = useState([]);
  console.log("arrr", area.key);
  console.log();
  const [worker, setWorker] = useState(false);
  const [occupation, setOccupation] = useState("QUoP0oYjQaPHrMhzznNN");

  const getLocation = async () => {
    let locationArray = [];
    let getLocation = await firebase.firestore().collection("Location").get();
    getLocation.docs.forEach((doc) => {
      let data = doc.data();
      data.key = doc.id;
      locationArray.push(data);
      setLocation(locationArray);
    });
  };
  const getRoles = async () => {
    let fireData = [];
    let getrole = await firebase
      .firestore()
      .collection("Roles")
      .where("value", "!=", "Customer")
      .get();
    getrole.docs.forEach((doc) => {
      let data = doc.data();
      data.key = doc.id;
      fireData.push(data);
      setRoles(fireData);
    });
  };
  console.log("rolesq", roles);
  console.log("location", locations);
  const onFinish = async (values) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(async (userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("user created", user);
        // ...
        await firebase
          .firestore()
          .collection("Users")
          .doc(user.uid)
          .add({
            full_name: values.full_name,
            email: values.email,
            phone: values.phone,
            worker: worker,
            role: occupation,
            location: area?.key,
          })
          .then(() => swal("Account Created"))
          .catch((e) => swal("Failed"));
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        swal("Failed", errorMessage);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    swal("Failed!");
  };
  const handleChange = (key) => {
    console.log(`selected ${key}`);
    setOccupation(key);
  };
  const handleChangeLocation = (key, b) => {
    setArea(b);
  };
  const onFinishLogin = async (values) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((doc) => {
        localStorage.setItem("uid", doc.user.uid);
        console.log("uid", doc.user.uid);
      });
  };
  useEffect(() => {
    getRoles();
    getLocation();
  }, []);
  return (
    <>
      <Wrapper>
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
        </div>

        <section>
          <div class="container" id="container">
            <div class="form-container sign-up-container">
              <Form
                name="basic"
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <h1>Sign Up</h1>

                <Form.Item
                  name="full_name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter full_name!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Full Name" />
                </Form.Item>
                {/* <Form.Item
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Last Name" />
                </Form.Item> */}
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                    { type: "email" },
                  ]}
                >
                  <Input placeholder="Enter Email" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      // type:'number',
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Contact Number" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true },
                    { min: 8 },
                    {
                      validator: (_, value) =>
                        value &&
                        value.match(/[a-z]/i) &&
                        value.match(/[0-9]/i) &&
                        value.match(/[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/i)
                          ? Promise.resolve("jnasjno")
                          : Promise.reject(
                              "Password includes alteast one number, one letter and one special character"
                            ),
                    },
                  ]}
                >
                  <Input.Password placeholder="Enter Password" />
                </Form.Item>
                <Form.Item
                  name="value"
                  rules={[
                    {
                      required: true,
                      message: "Please select your area!",
                    },
                  ]}
                >
                  <Select
                    defaultValue="Select Area"
                    style={{
                      width: "90%",
                    }}
                    options={locations}
                    onChange={handleChangeLocation}
                  />
                </Form.Item>

                <Form.Item name="worker" valuePropName="checked">
                  <Checkbox onChange={(e) => setWorker(e.target.checked)}>
                    Login as Worker
                  </Checkbox>
                </Form.Item>
                {worker ? (
                  <Form.Item name="occupation">
                    <Select
                      defaultValue="Select Occupation"
                      style={{
                        width: "90%",
                      }}
                      options={roles}
                      onChange={handleChange}
                    />
                  </Form.Item>
                ) : null}
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    SIGN UP
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div class="form-container sign-in-container">
              <Form
                name="basic"
                onFinish={onFinishLogin}
                onFinishFailed={onFinishFailed}
              >
                <h1>Log In</h1>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter!",
                    },
                  ]}
                >
                  {/* <Input.Password style={{width:"110%"}} placeholder="Enter Password" /> */}
                  <Input type="password" placeholder="Enter Password" />
                </Form.Item>
                <a href="#">Forgot your password?</a>
                <Button type="primary" htmlType="submit">
                  Log in
                </Button>
              </Form>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <div class="social-container">
                    <img src={logo} alt="" style={{ background: "#000" }} />
                  </div>
                  <h1>Log in</h1>
                  <p>Login in here if you already have an account </p>
                  <Button
                    style={{ border: "1px solid #fff" }}
                    class="ghost mt-5"
                    id="signIn"
                    onClick={myFunction}
                  >
                    Log in
                  </Button>
                </div>

                <div class="overlay-panel overlay-right">
                  <div class="social-container">
                    <img src={logo} alt="" style={{ background: "#000" }} />
                  </div>
                  <h1>Create Account!</h1>
                  <p>Sign up if you still don't have an account ... </p>
                  <Button
                    style={{ border: "1px solid #fff" }}
                    class="ghost"
                    id="signUp"
                    onClick={myFunction}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};
export default Login;
