"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Preencha os campos corretamente");
      return;
    }

    setIsLoading(true); // Ativar carregamento

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
        "6n3a4hqovdjs1_p42"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          alert("Mensagem enviada com sucesso");
          setName("");
          setEmail("");
          setMessage("");
          setIsLoading(false); 
        },
        (err) => {
          console.log("erro", err);
          setIsLoading(false); 
        }
      );
  }

  return (
    <div className="container mx-auto max-w-xl p-4" id="contact">
      <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">Contact</h1>

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
          type="email"
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

        <button
          className={`bg-gray-800 hover:bg-gray-500 text-white py-2 px-4 rounded-md cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
