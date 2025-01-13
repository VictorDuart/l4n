import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import { QRCodeSVG } from "qrcode.react";

function DepositPage() {
  const navigate = useNavigate();
  const [depositMethod, setDepositMethod] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleConfirmClick = () => {
    if (depositMethod === "pix") {
      const randomQrCode = Math.random().toString(36).substring(2, 15);
      setQrCodeValue(randomQrCode);
      alert("Depósito via Pix selecionado. QR Code gerado.");
    } else if (depositMethod === "boleto") {
      alert("Depósito via Boleto selecionado");
      downloadBoletoPDF();
    } else {
      alert("Por favor, selecione um método de depósito");
    }
  };

  const downloadBoletoPDF = () => {
    const withdrawValue = document.getElementById("withdrawValue").value;
    const doc = new jsPDF();

    doc.text(`Valor: R$ ${withdrawValue}`, 10, 10);
    doc.text(
      "Código de Barras: 1234.5678.9101.1121.3141.5161.7181.9202",
      10,
      20
    );

    doc.save("boleto.pdf");
  };

  return (
    <div className="page">
      <Header />
      <main>
        <div className="card-wallet">
          <p>
            Saldo disponível: <span className="color-green">R$ 1.000,00</span>
          </p>
          <div className="input-container">
            <label htmlFor="withdrawValue">Quantidade (BLR):</label>
            <input
              type="numeric"
              id="withdrawValue"
              name="withdrawValue"
              placeholder="Digite a quantidade"
            />
          </div>
          <div className="deposit-options" style={{ margin: "20px 0" }}>
            <label>
              <input
                type="radio"
                name="depositMethod"
                value="pix"
                checked={depositMethod === "pix"}
                onChange={() => setDepositMethod("pix")}
              />
              Depósito via Pix
            </label>
            <label>
              <input
                type="radio"
                name="depositMethod"
                value="boleto"
                checked={depositMethod === "boleto"}
                onChange={() => setDepositMethod("boleto")}
              />
              Depósito via Boleto
            </label>
          </div>
          <button
            className="card-wallet-button-confirm"
            onClick={handleConfirmClick}
          >
            Confirmar
          </button>
          {qrCodeValue && (
            <div style={{ marginTop: "0px", textAlign: "center" }}>
              <p>Escaneie o QR Code abaixo com a câmera do seu celular:</p>
              <QRCodeSVG value={qrCodeValue} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DepositPage;
