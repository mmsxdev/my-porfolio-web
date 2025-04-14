import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Send, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    // Formata o número para o padrão internacional removendo caracteres especiais
    const phoneNumber = "+5511999999999"; // Substitua pelo número real
    const message = encodeURIComponent(
      "Olá! Vim pelo seu portfólio e gostaria de conversar sobre um projeto."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/mmsxdev", icon: Github },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/miguel-hju-24189a2b8/",
      icon: Linkedin,
    },
    {
      name: "Instagram Pessoal",
      url: "https://www.instagram.com/miguelmsx7",
      icon: Instagram,
    },
    {
      name: "Instagram Profissional",
      url: "https://www.instagram.com/msx.dev",
      icon: Instagram,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-slate-100/30 dark:bg-slate-800/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-slate-900 dark:text-white">Fale </span>
          <span className="text-purple-600">Comigo</span>
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="glass rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Vamos Trabalhar Juntos
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Estou sempre aberto a novos projetos e oportunidades de
                colaboração. Minha prioridade é criar soluções que realmente
                fazem a diferença.
              </p>

              <div className="flex items-start mb-6">
                <Phone className="text-purple-600 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    WhatsApp
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    Resposta rápida garantida
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-slate-900 dark:text-white mb-4">
                Me siga nas redes sociais
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-white hover:bg-purple-600 hover:text-white transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - WhatsApp Button */}
          <div className="glass rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Contato Direto
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp e
                discutir seu projeto.
              </p>
            </div>

            <Button
              onClick={openWhatsApp}
              className="whatsapp-btn bg-green-500 hover:bg-green-600 text-white py-6 px-8 rounded-lg text-lg w-full flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              <span>Iniciar Conversa no WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
