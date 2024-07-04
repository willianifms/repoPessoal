"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Preencha os campos corretamente");
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_4rhm7kk",
        "template_wc2kdg8",
        templateParams,
        "f9hJzuLPx4NaEFoCG"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          alert("Mensagem enviada com sucesso");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("erro", err);
        }
      );
  }

  return (
    <div className="container mx-auto max-w-xl p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Contact</h1>

      <form className="flex flex-col space-y-4" onSubmit={sendEmail}>
        <input
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input
          className="bg-gray-800 hover:bg-gray-500 text-white py-2 px-4 rounded-md cursor-pointer"
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
}


