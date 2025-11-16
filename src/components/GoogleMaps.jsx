export default function GoogleMaps() {
  return (
    <>
      <div className="w-full h-125 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.071459915818!2d106.51649597586857!3d-6.254315861237245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4207002afc6847%3A0x69cc73b8428b0a4!2sCV%20AZKA%20CAHAYA%20GEMILANG!5e0!3m2!1sid!2sid!4v1763278676296!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
