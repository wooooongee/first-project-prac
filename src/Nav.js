import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Nav = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  let previousScrollTop = 0;
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > previousScrollTop) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
    previousScrollTop = scrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isScrollDown ? "hidden" : "nav"}>
      <div className="nav-flex">
        <div>
          <Link className="link" to={"/"}>
            gron
          </Link>
        </div>
        <div className="categorys">
          <Link
            to={"/category"}
            className="link"
            onMouseOver={() => {
              setIsCategory(true);
            }}
          >
            카테고리
          </Link>
          <Link
            to={"/category"}
            className="link"
            onMouseOver={() => {
              setIsCategory(true);
            }}
          >
            카테고리
          </Link>
          <Link to={"/category"} className="link">
            카테고리
          </Link>
          <Link to={"/category"} className="link">
            카테고리
          </Link>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div
        className={isCategory ? "category-detail open" : "category-detail"}
        onMouseLeave={() => {
          setIsCategory(false);
        }}
      >
        <div className={isCategory ? "visible" : "hide"}>
          <div>
            <p>전체상품</p>
            <p>as</p>
            <p>asdfl</p>
          </div>
          <div>
            <p>전체상품</p>
            <p>as</p>
            <p>asdfl</p>
          </div>
          <div>
            <p>전체상품</p>
            <p>as</p>
            <p>asdfl</p>
          </div>
          <div>
            <p>전체상품</p>
            <p>as</p>
            <p>asdfl</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
