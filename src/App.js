import AppointmentList from "./components/AppointmentList";
import Form from "./components/Form";

function App() {
  return (
    <div className="container">
      <h1 className='text-center mb-4'>Administrador de citas</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <Form />
        </div>
        <div className="col-12 col-md-6">
          <AppointmentList />
        </div>
      </div>


    </div>
  )
}

export default App;
