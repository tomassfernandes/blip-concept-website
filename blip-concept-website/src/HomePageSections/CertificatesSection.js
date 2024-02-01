export default function CertificatesSection() {
  const certificates = [
    { id: "1", img: "/img/awards_gpw.webp", alt: "gpw awards" },
    { id: "2", img: "/img/awards_gpw1.webp", alt: "gpw1 awards" },
    { id: "3", img: "/img/awards_mept_2021.webp", alt: "mept awards 2021" },
    { id: "4", img: "/img/awards_mept_2022.webp", alt: "mept awards 2022" },
    {
      id: "5",
      img: "/img/saas-development-software-seal-general-dark.webp",
      alt: "sass development awards",
    },
    {
      id: "6",
      img: "/img/selo-vencedoras-mept-2023.webp",
      alt: "mept awards 2023",
    },
  ];

  return (
    <section className="certificates-section">
      <div className="section">
        <h2 className="certificates-heading-secondary">
          One of the best IT companies in Portugal... They said it, not us.
        </h2>
        <div className="certificates-grid">
          {certificates.map((item) => (
            <div key={item.id} className="certificates-img-div">
              <img className="certificates-img" src={item.img} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
