const Discount = () => {
  return (
    <section id="discount">
      <div>
        <h2 className="sec-title">we have A discount</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          asperiores consectetur, recusandae ratione provident necessitatibus,
          cumque delectus commodi fuga praesentium beatae. Totam vel similique
          laborum dicta aperiam odit doloribus corporis.
        </p>
        <div>
          <img src="images/discount.png" alt="" />
        </div>
      </div>
      <div>
        <form action="">
          <h2 className="sec-title">request A discount</h2>
          <input
            type="text"
            name="name"
            placeholder="your name"
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="your email"
            className="input"
          />
          <input
            type="text"
            name="phone-number"
            placeholder="your phone"
            className="input"
          />
          <textarea
            name="needs"
            placeholder="tell us about your needs"
            className="input"
          ></textarea>
          <button type="submit">send</button>
        </form>
      </div>
    </section>
  );
};

export default Discount;
