import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import Header from "../components/Header";

const Transaction = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { emptyCart } = useContext(Context);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      emptyCart();
      setLoading(false);
    }, 1500);

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 3500);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(redirectTimer);
    };
  }, [loading]);

  return (
    <div className="transaction-page">
      <Header />
      <div className="transaction-page-message">
        {!loading && <h1>You have successfully purchased items!</h1>}
      </div>
    </div>
  );
};

export default Transaction;
