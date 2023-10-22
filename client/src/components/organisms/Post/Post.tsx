import Post from "../../../types/Post";
import "./Post.scss";
const Post: React.FC<Partial<Post>> = ({
  title,
  message,
  creator,
  selectedFile,
}: Partial<Post>) => {
  return (
    <div
      className="col-md-6 col-lg-4 mt-5 wow fadeInUp"
      data-wow-delay=".2s"
      style={{
        visibility: "visible",
        animationDelay: "0.2s",
        animationName: "fadeInUp",
      }}>
      <div className="blog-grid">
        <div className="blog-grid-img position-relative">
          <img
            alt="img"
            src={
              selectedFile
                ? selectedFile
                : "https://www.bootdey.com/image/480x480/00FFFF/000000"
            }
          />
        </div>
        <div className="blog-grid-text p-4">
          <h3 className="h5 mb-3">
            <a href="#!">{title}</a>
          </h3>
          <p className="display-30">{message}</p>
          <div className="meta meta-style2">
            <ul>
              <li>
                <a href="#!">
                  <i className="fas fa-calendar-alt"></i> 10 Jul,{" "}
                  <script>document.write(new Date().getFullYear())</script>
                  2022
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fas fa-user"></i> {creator}
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fas fa-comments"></i> 38
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
