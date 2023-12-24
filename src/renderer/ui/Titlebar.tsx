import './Titlebar.css';

export default function Titlebar() {
  return (
    <header className="text-center titlebar container-fluid">
      <div className="row">
        <div className="col-xl-5 col-sm-2" />
        <div className="col-xl-2 col-sm-8">
          <big>Cabbage Desktop edition</big>
        </div>
        <div className="col-xl-5 col-sm-2" />
      </div>
    </header>
  );
}
