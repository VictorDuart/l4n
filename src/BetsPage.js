import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function BetsPage() {
  const [activeTab, setActiveTab] = useState("open");

  return (
    <div className="page">
      <Header />
      <main>
        <div className="card-bets">
          <div className="tabs">
            <button
              className={activeTab === "open" ? "active" : ""}
              onClick={() => setActiveTab("open")}
            >
              Apostas Abertas
            </button>
            <button
              className={activeTab === "resolved" ? "active" : ""}
              onClick={() => setActiveTab("resolved")}
            >
              Apostas Resolvidas
            </button>
          </div>
          <div className="tab-content">
            {activeTab === "open" && (
              <div>Aqui estão as apostas abertas...</div>
            )}
            {activeTab === "resolved" && (
              <div>Aqui estão as apostas resolvidas...</div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BetsPage;
