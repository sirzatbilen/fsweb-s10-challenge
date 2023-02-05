import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import { verileriSil } from "../actions";
import { useDispatch } from "react-redux";

const PostList = () => {
  const notlar = useSelector((depo) => depo.notlar);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("s10ch", JSON.stringify(notlar));
  }, [notlar]);

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
      <button onClick={() => dispatch(verileriSil())}>VERİLERİ SİL ?</button>
    </div>
  );
};

export default PostList;
