
const Modal = ({handleclose}) => {

  

  return (
    <dir>
      <div className="box">
        <div className="modla-flex">
          <div className="onemodal">
            <span>Modal Demo</span>
          </div>
          <div className="twomodal">
            <span onClick={handleclose}>X</span>
          </div>
        </div>
        <div className="pra">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            tenetur, saepe ducimus, sunt sequi rerum aperiam illo placeat quo
            quaerat assumenda quidem laborum beatae ipsum asperiores ipsa.
            Earum, eveniet saepe.
          </p>
        </div>
      </div>
    </dir>
  );
};

export default Modal;
