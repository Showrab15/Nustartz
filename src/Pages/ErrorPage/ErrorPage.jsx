import { Link } from 'react-router-dom';
import './errorpage.css'
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 font-serif min-h-screen my-auto">
      {/* <h1 className="text-6xl text-center font-extrabold">404 - Not Found</h1> */}
     
      {/* You can add more content or links here */}
      <div  className="error">

      <p className="p">4</p>
    <span className="dracula">      
      <div className="con">
        <div className="hair"></div>
        <div className="hair-r"></div>
        <div className="head"></div>
        <div className="eye"></div>
        <div className="eye eye-r"></div>
        <div className="mouth"></div>
        <div className="blod"></div>
        <div className="blod blod2"></div>
      </div>
    </span>
    <p className="p">4</p>
    </div>
    <p className="ext-center font-semibold text-2xl">Oops! The page{` you're`} looking for {`doesn't`} exist.</p>
      <Link className="text-blue-500 text-xl" to="/">GO Back to Nustratz</Link>
    </div>
  );
};

export default ErrorPage;
