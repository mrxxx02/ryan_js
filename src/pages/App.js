import '../App.css';
import '../css/style.css';
import Header from '../components/Header'

function App() {
  return (
    <div className="App">
      <div class="p-5 mb-4 bg-light rounded-3 jumbotron">
        <div class="container-lfuid py-5 text-center">
          <p class="fs-5 fst-italic mt-5">Web Developer</p>
          <h1 class="display-4">Muhammad Ryan Prayogi</h1>
          <button
            class="btn btn-warning border boder-dark btn-sm mt-5 shadow-sm text-white px-3 py-2">Linkedin Profile
          </button>
        </div>
      </div>

      <div class="container text-center" id="bio">
       
            <h3 class="fs bold fs-2">My Bio</h3>
            <p class="fs-6 fst-italic fw-light">
              Halo perkenalkan nama saya Muhammad Ryan Prayogi, biasa dipanggil Ryan. Saya Berasal dari kota Medan, Sumatera Utara. Saya adalah seorang mahasiswa jurusan teknik informatika semester 5 dan berkuliah di Universitas Harapan Medan. Saya tinggal bersama dengan kedua orangtua saya dan kedua kakak saya, dan saya adalah anak terakhir dari 3 bersaudara.
            </p>
              <div class="row">
                <div class="col lg-4 col-md 4 col-sm-12">
                  <h2 class="fs bold fs-2">C++</h2>
                  <p class="fw-light">
                    Saya mempelajari bahasa pemrograman C++ dari kampus saya dan dari youtube.
                  </p>
                </div>
                <div class="col">
                  <h2 class="fs bold fs-2">HTML & CSS</h2>
                  <p class="col lg-4 col-md 4 col-sm-12">
                    Saya mempelajari HTML & CSS untuk menambah kemampuan saya dalam dunia coding, dan keinginan saya untuk membuat web yang dapat dipakai dan berguna untuk orang lain.
                  </p>
                </div>
            
                  <div class="col">
                    <h2 class="fs bold fs-2">Javascript</h2>
                    <p class="col lg-4 col-md 4 col-sm-12">
                      Saya mempelajari bahasa pemrograman Javascript dari kampus.
                    </p>
                  </div>
              </div>
            </div>
                      <div class="container mt-5" id="contact">
                        <h1 class="col lg-4 col-md 4 col-sm-12 text-center">Contact</h1>
                        <div class="card mx-auto width: 500px;">
                          <div class="card-body mb-3">
                              <label for="exampleFormControlInput" class="form-label">Email Address</label>
                              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Masukkan Email"
                              />
                            </div>
                            <div class="mb-3">
                              <label for="exampleFormControlTextarea1" class="form-label">Messages</label>
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3">
                              </textarea>
                            </div>
                            <div class="d-grid gap-2">
                              <button
                                class="btn btn-warning border boder-dark btn-sm mt-1 shadow-sm text-white px-3 py-2">Send</button>
                            </div>
                          </div>
                        </div>
                      </div>
              );
}

export default App;