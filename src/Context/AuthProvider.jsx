import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import headerbg from "../assets/headerbg.png";

import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import Swal from "sweetalert2";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const AuthData = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [themeData, setThemeData] = useState(false);
  const [reRender, setReRender] = useState(false);
  const [myItems, setMyItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    setDataLoading(true);
    fetch(`https://artistryavenue-sever.vercel.app/admin`)
      .then((response) => response.json())
      .then((data) => {
        setDataLoading(false);
        setAdmin(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    setDataLoading(true);
    fetch(
      `https://artistryavenue-sever.vercel.app/my_art_&_craft_list/${user?.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDataLoading(false);
        setMyItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, reRender]);

  useEffect(() => {
    setDataLoading(true);
    fetch("https://artistryavenue-sever.vercel.app/all_art_and_craft")
      .then((response) => response.json())
      .then((data) => {
        setData(data);

        setDataLoading(false);
      });
  }, [reRender]);

  useEffect(() => {
    setDataLoading(true);
    fetch("https://artistryavenue-sever.vercel.app/review")
      .then((response) => response.json())
      .then((data) => {
        setDataLoading(false);
        setReviewData(data);
      });
  }, []);
  useEffect(() => {
    setDataLoading(true);
    fetch("https://artistryavenue-sever.vercel.app/categories")
      .then((response) => response.json())
      .then((data) => {
        setDataLoading(false);
        setCategories(data);
      });
  }, []);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const LoginByGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const LoginByGitHub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (Name, photo) => {
    return updateProfile(user, {
      displayName: Name,
      photoURL: photo ? photo : "",
    });
  };

  const sweetAlert = (title, icon, text, btn, time) => {
    return Swal.fire({
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: btn,
      timer: time,
    });
  };
  const sweetLoginAlert = (title, time) => {
    return Swal.fire({
      // imageUrl: img,
      imageWidth: 120,
      title: title,
      timer: time,
      showConfirmButton: false,
    });
  };

  const contextData = {
    data,
    admin,
    reRender,
    setReRender,
    reviewData,
    setDataLoading,
    myItems,
    user,
    loading,
    dataLoading,
    themeData,
    headerbg,
    categories,
    setThemeData,
    LoginByGoogle,
    LoginByGitHub,
    registerUser,
    loginUser,
    logOutUser,
    sweetAlert,
    sweetLoginAlert,
    updateUserProfile,
  };
  return <AuthData.Provider value={contextData}>{children}</AuthData.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
