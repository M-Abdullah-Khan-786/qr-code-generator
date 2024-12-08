import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRGenerator: React.FC = () => {
  const [text, setText] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);

  const validateUrl = (url: string): boolean => {
    const urlRegex =
      /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
    return urlRegex.test(url);
  };

  const handleInputChange = (value: string) => {
    setText(value);
    setIsValidUrl(validateUrl(value));
  };

  return (
    <div className="container">
      <h1 className="header">QR Code Generator</h1>
      <p className="description">
        Enter a valid URL below to generate a QR code. Perfect for links,
        messages, and more!
      </p>
      <input
        type="text"
        placeholder="Type or paste a valid URL"
        value={text}
        onChange={(e) => handleInputChange(e.target.value)}
        className={`input-field ${isValidUrl ? "" : "error"}`}
      />
      {!isValidUrl && text && (
        <p className="error-message">Please enter a valid URL.</p>
      )}
      <div className="qr-code">
        {text && isValidUrl ? (
          <QRCodeCanvas value={text} size={200} />
        ) : (
          <p>Your QR code will appear here</p>
        )}
      </div>
      <div>
        <button onClick={() => setText("")} className="button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default QRGenerator;
