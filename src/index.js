import "./styles.css";

const onClicAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
    };

  createIncompleteList(inputText);

  //未完了リストから指定の要素を削除   二つ同じ処理が出たからここにまとめる　完了も削除も押したら未完了TODOから消える処理
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  //未完了リストに追加する関数
  const createIncompleteList = (text) => {
    //div生成  jsでDOMを作成する場合はcreateElementを使用する
    const div = document.createElement("div");
    div.className = "list-row"; //divタグにlist-rowという名前付与してあげる
    //jsからHTMLのDOMを付与して差し込んでいってあげる

    //liタグの生成
    const li = document.createElement("li");
    li.innerText = text; //リストタグの中にテキストを入れ込む場合はinnerTextを使用
    //これでliの中にinputTextの値が付与される

    //button（完了）タグの生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      //押された完了ボタンの親タグ(div)を未完了リストから削除
      deleteFromIncompleteList(completeButton.parentNode);

      //ここに完了リストに追加する要素を記入する
      const addTarget = completeButton.parentNode;

      //TODO　内容のテキストを取得
      const text = addTarget.firstElementChild.innerText;

      //div以下を初期化
      addTarget.textContent = null;

      //liタグを生成
      const li = document.createElement("li");
      li.innerText = text;

      //buttonタグを生成
      const backbutton = document.createElement("button");
      backbutton.innerText = "戻す";
      backbutton.addEventListener("click", () => {
        //押された戻すボタンの親タグ(div)を完了リストから削除
        const deleteTarget = backbutton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);

        //テキスト取得
        const text = backbutton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);
      });

      //divタグの子要素に各要素を設定
      addTarget.appendChild(li);
      addTarget.appendChild(backbutton);

      //完了リストに追加
      document.getElementById("complete-list").appendChild(addTarget);
       });

      //押された完了ボタンん親タグ（div）を未完了リストから削除
      // const deleteTaret = completeButton.parentNode; //親の要素を取得するのはparentNodeを使用する
      // document.getElementById("incomplete-list").removeChild(deleteTaret);
      // ↑これを下で関数にまとめた（完了と削除が一緒の処理）からここではまとめたやつを書くだけ。下の削除ボタンも同様
      // deleteFromIncompleteList(completeButton.parentNode);⇦これも上に移動
    

    //button（削除）タグの生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      //押された削除ボタンん親タグ（div）を未完了リストから削除
      deleteFromIncompleteList(deleteButton.parentNode);
    });

    //divタグの子要素に各要素を設定
    div.appendChild(li); //
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(div);

  //jsでアプリを開発するときにはイベントをどこかに付与したり、値を取得したり、何か画面に要素追加するときは
  //createElementで要素を作成して、入れ子にしたいときはappendChildで入れ子を作成して画面に要素を書き換えていく

document
  .getElementById("add-button")
  .addEventListener("click", () => onClicAdd());