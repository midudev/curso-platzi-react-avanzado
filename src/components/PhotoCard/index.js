import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null);
  const key = `like-${id}`;
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.localStorage.getItem(key) === "true"
      ? setLiked(true)
      : setLiked(false);
  }, []);

  useEffect(
    function () {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        console.log(isIntersecting);
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    },
    [element]
  );

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}>
            {liked ? (
              <MdFavorite size="32px" />
            ) : (
              <MdFavoriteBorder size="32px" />
            )}
            {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
