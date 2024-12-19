import Container from "react-bootstrap/esm/Container";
import "./MyConnect.css";
import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFacebook,
} from "react-icons/bs";
import Title from "../Title/Title";
import Row from "react-bootstrap/esm/Row";
const MyConnect = () => {
  return (
    <div className="myConnect">
      <Container>
        <Title title="connect with us" />
        <Row className="justify-content-center">
          <div className="col-md-2 card-myconnect" style={{ width: "18rem" }}>
            <div className="card card-myconnect-sty">
              <span>
                <BsFillTelephoneFill className="card-myconnect-icon" />
              </span>
              <span className="card-nyconect-body">
                <h3>phone</h3>
                <h4>
                  {" "}
                  <a href="tel:011-5110088">011-5110088</a>
                </h4>
                <h4>
                  {" "}
                  <a href="tel:+963943353331">0943353331</a>
                </h4>
              </span>
            </div>
          </div>
          <div className="col-md-2 card-myconnect" style={{ width: "18rem" }}>
            <div className="card card-myconnect-sty">
              <span>
                <BsFillEnvelopeFill className="card-myconnect-icon" />
              </span>
              <span className="card-nyconect-body">
                <h3>email</h3>
                <h4>
                  {" "}
                  <a
                    href="mailto:betamedicall@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    betamedicall@gmail.com
                  </a>
                </h4>
                <h4 style={{ opacity: "0" }}>beta@gmail.com</h4>
              </span>
            </div>
          </div>
          <div className="col-md-2 card-myconnect" style={{ width: "18rem" }}>
            <div className="card card-myconnect-sty">
              <span>
                <BsFacebook className="card-myconnect-icon" />
              </span>
              <span className="card-nyconect-body">
                <h3>faceboook</h3>
                <h4>
                  <a
                    href="https://m.facebook.com/beta.lab.sy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    beta.lab
                  </a>
                </h4>
                <h4 style={{ opacity: "0" }}>55110088</h4>
              </span>
            </div>
          </div>
        </Row>
        <Row className="justify-content-center">
          <div className="col-9 card form">     
          <div class="card-body" >
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" class="form-control" placeholder="Enter your All name"/>
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">sbject</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="what's your need"/>
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">email</label>
              <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Exambil@email.com"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            </div>
            <div className="maps">
            <iframe
            title="my-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3325.2645622397304!2d36.325702698980116!3d33.54650190000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e798e0f20749%3A0xa5fc6e09dada524a!2z2YXYrtio2LEg2KjZitiq2Kcg2YTZhNiq2K3Yp9mE2YrZhCDYp9mE2LfYqNmK2Kk!5e0!3m2!1sar!2s!4v1687734549648!5m2!1sar!2s"
              width="100%"
              height="100%"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          </div>
         
       </Row>
      </Container>
    </div>
  );
};

export default MyConnect;
