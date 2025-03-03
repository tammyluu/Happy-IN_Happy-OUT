import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Navbar from "../shared/Navbar";
import background from "../assets/backgroundDetails.jpg";
import {userService} from "../service/user-service.js";

const EmployeeDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [user, setUser] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        userService
            .getUserById(id)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                setError("Erreur lors de la récupération de l'utilisateur");
            })
    }, [id]);

    const handleDeleteUser = (userId) => {
      userService
          .deleteUser(userId)
          .then(() => {
              setUser("");
              navigate(-1);
          })
          .catch((error) => {
              setError("Erreur lors de la suppression de l'utilisateur")
          });

  }

  return (
    <>
      <Navbar />
      <div
        className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div
          style={{ borderColor: "#B0D0FF" }}
          className="border-2 rounded-lg p-16 bg-white drop-shadow-lg z-10 flex flex-col align-items-center"
        >
          <h3
            style={{ color: "#233863" }}
            className="font-bold text-2xl text-left mb-6"
          >
            Employee Details
          </h3>
          {error && <div>{error}</div>}
          {!error && (
            <>
              <ul>
                <li style={{ color: "#233863" }} class="font-bold">
                  Fonction: <span className="font-medium">{user.jobTitle}</span>
                </li>
                <hr className="h-px bg-blue-200 border-0 mb-4" />
                <li style={{ color: "#233863" }} class="font-bold">
                  Last name: <span className="font-medium">{user.lastname}</span>
                </li>
                <hr className="h-px bg-blue-200 border-0 mb-4" />
                <li style={{ color: "#233863" }} class="font-bold">
                  First name: <span className="font-medium">{user.firstname}</span>
                </li>
                <hr className="h-px bg-blue-200 border-0 mb-4" />
                <li style={{ color: "#233863" }} class="font-bold">
                  Email: <span className="font-medium">{user.email}</span>
                </li>
                <hr className="h-px bg-blue-200 border-0 mb-4" />
              </ul>
              <div className="flex justify-between w-full me-5 mt-6">
                <button
                  type="button"
                  style={{ backgroundColor: "#FA9746" }}
                  onClick={() => handleDeleteUser(user.id)}
                  className="px-5 py-3 text-base font-bold text-white rounded-lg text-center"
                >
                  <i className="bi bi-trash-fill me-2"></i>Delete
                </button>
                <button
                  type="submit"
                  style={{ backgroundColor: "#3586FD" }}
                  onClick={() => navigate(`/form/${user.id}`)}
                  className="px-7 py-3 text-base font-bold text-white rounded-lg text-center"
                >
                  <i className="bi bi-pencil-fill me-2"></i>Edit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
