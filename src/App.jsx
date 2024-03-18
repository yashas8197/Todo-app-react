import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Link} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4 d-flex justify-content-center align-items-center flex-column">
        <img
          src="https://images.unsplash.com/photo-1641261689141-ee46b8a0470c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="img-fluid rounded"
          style={{ maxWidth: "350px" }}
        />

        <div className=" my-5 text-center">
        <h3>Todos</h3>
        <p>Welcome to the Todo application!  </p>
          <Link to='/todos' className="btn btn-primary">View Todo</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
