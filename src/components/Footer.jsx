import { useState } from "react";
export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "beghteraf@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed ti copy", err);
    }
  };
  return (
    <>
      <footer>
        <p>Thank you for watching ❤️</p>
        <a onClick={copyEmail} className="email-copy">
          beghteraf@gmail.com
        </a>
      </footer>
      {copied && <div className="toast">Email copied ✨</div>}
    </>
  );
}
