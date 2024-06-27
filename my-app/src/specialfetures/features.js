import React from "react";
import "./featuress.css";
function FeatureCard({ title, content, imgSrc, alt }) {
  return (
    <section classNameName="card">
      <h2 classNameName="card_title">{title}</h2>
      <p classNameName="card_content">{content}</p>
      <img classNameName="card_img" src={imgSrc} alt={alt} />
    </section>
  );
}

function Features() {
  return (
    <div>
      <main className="fourcard">
        <div className="headerr">
          <h1 className="special">SPECIAL FEATURES</h1>
          <p className="description">
            We offer some awesome features that will help you We have some
            special crieteria .Tailored to meet your individual needs and goals.
          </p>
        </div>

        <div className="teambuilder">
          <h1>TURF PITCHES</h1>
          <p>
            Multiple high-quality turf pitches that mimic different match
            conditions, ideal for developing batting and bowling skills
          </p>
          <div className="imgicon">
            <img src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/440869904_413013678153432_4121259468674046172_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG2anFMuF5gj6YVNAaKAyeARDEEZRkJPfREMQRlGQk99K99O42STm_kINxN00dWjCfrTwYAg6IrugJt_22RK6J-&_nc_ohc=_EjM0bJdwq4Q7kNvgGHmVbl&_nc_ht=scontent.fktm21-1.fna&oh=00_AYDMDENBBbjv3CMJ46Tm8bY0quKB9_fAGtrF-IXm4x7jCA&oe=6682F30A" />
          </div>
        </div>

        <div className="teambuilder">
          <h1>Special focus on girls team</h1>
          <p>
            Multiple high-quality turf pitches that mimic different match
            conditions, ideal for developing batting and bowling skills
          </p>
          <div className="imgicon">
            <img src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/441349111_416058031182330_2407881393810939395_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHnhRLxBaoqg6PhYCzJnl6qyzPWdj22Ue3LM9Z2PbZR7awDqD2IdNSck4gVMBY_eq9TEzsIjS5OuyqOPZzXdqQJ&_nc_ohc=q2fYK4yZ3HkQ7kNvgE_wjLB&_nc_ht=scontent.fktm21-1.fna&oh=00_AYC3v12aYHuXMV9xL2KlNA5DbQwYas7WFEND87u6apr4Kg&oe=668306E7" />
          </div>
        </div>

        <div className="teambuilder">
          <h1>SYNTHETIC PITCHES</h1>
          <p>
            Durable synthetic pitches for consistent practice, suitable for all
            weather conditions.
          </p>
          <div className="imgicon">
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/5/307242949/JA/VF/KL/3103550/artificial-cricket-pitch-500x500.jpeg" />
          </div>
        </div>

        <div className="karma">
          <h1>FIELDING AREA</h1>
          <p>
            Specific zones designed for fielding drills, including catching,
            throwing, and wicket-keeping practices.
          </p>
          <div className="imgicon">
            <img src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/438078711_412936984827768_7299544596731618977_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHDzJAv6-Gm4dyL_NwCVGqXV9TQYgxH-YxX1NBiDEf5jAfx5-0RdQOuEa7bSQ7F6niDYswS6u-cwXBFvZdd_oCD&_nc_ohc=vrllbw0rF1MQ7kNvgFgcpD7&_nc_ht=scontent.fktm21-1.fna&oh=00_AYCeaWCaYTteSEkOMw5CUcG6o9cuaXpccGYki_sfI-wyJQ&oe=6682F721" />
          </div>
        </div>

        <div className="calculator">
          <h1>DORMITORIES</h1>
          <p>
            Comfortable on-site accommodation for players attending intensive
            training camps or from out of town.
          </p>
          <div className="imgicon">
            <img src="https://theboundaryedge.com/wp-content/uploads/2024/02/wicket-keeper-and-slips-cricket.jpg" />
          </div>
        </div>
        <div className="teambuilder">
          <h1>EQUIPMENT STORE</h1>
          <p>
            On-site store offering a wide range of cricket gear and equipment
            from leading brands.
          </p>
          <div className="imgicon">
            <img src="https://cdn.mrcrickethockey.com/wp-content/uploads/2019/03/05103420/cricket-mr-cricket-hockey-banner.jpg" />
          </div>
        </div>

        <div className="karma">
          <h1>Both Morning and evening session</h1>
          <p>
            Embracing the tranquility of dawn, morning sessions set a positive
            tone for the day ahead. Here, the mind is fresh and uncluttered,
            making it an ideal time for focused activities such as meditation,
            exercise, or goal-setting. Engaging in morning sessions can enhance
            productivity, boost mood, and foster a sense of accomplishment,
            empowering individuals to tackle challenges with clarity and vigor.
            Additionally, establishing a morning routine promotes consistency
            and discipline, laying a strong foundation for success throughout
            the day.
          </p>
          <div className="imgicon">
            <img src="https://www.shutterstock.com/shutterstock/videos/1110455127/thumb/1.jpg?ip=x480" />
          </div>
        </div>

        <div className="calculator">
          <h1>Weekly practice games</h1>
          <p>
            Engaging in weekly cricket games offers a myriad of benefits for
            individuals of all ages and skill levels. These regular matches not
            only provide an avenue for physical activity but also foster
            camaraderie, skill development, and mental well-being.
          </p>
          <div className="imgicon">
            <img src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/440445383_412389508215849_1100143474579447713_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHGi9d4r5rfnXDHswKMoS-5adBnokJd5ilp0GeiQl3mKd3R1y7FaTap9pMmF5HDmSUNcOwlauXWZKNj3SbG5M68&_nc_ohc=p-b5FF8H6BMQ7kNvgFZlu9E&_nc_ht=scontent.fktm21-1.fna&oh=00_AYCOzQo8-RAfjZKlSkkjIX6yHqCGphaDRjY6jrBpoGEUeQ&oe=6682F6A1" />
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default Features;
