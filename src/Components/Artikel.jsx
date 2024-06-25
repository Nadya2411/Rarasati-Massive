import React, { useState } from "react";
import ArtikelItem from "./ArtikelItem";
import Button from "./Button";
import { Link } from "react-router-dom";

const Artikel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="">
        <div className="flex items-center justify-between mx-20 mt-10 mb-10">
          <h1 className="text-cyan text-3xl font-bold font-Satoshi-Regular">
            Artikel Terbaru Kami
          </h1>
          <Link to="/artikel">
            <Button variant="primary" onClick={handleOpenModal}>
              Selengkapnya
            </Button>
          </Link>
        </div>
        <ArtikelItem />
      </section>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
};

export default Artikel;
