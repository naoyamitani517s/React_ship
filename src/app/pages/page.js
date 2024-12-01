'use client'; //style jsx を使うときにはこれを入れないといけない

import Header from '../header'
import Link from 'next/link'


export default function Home() {

  let title = "船検索"
  
  return (
    <div>

      <style jsx>
        {`
          table {
            width: 100%; 
            border-collapse: collapse;
          }

          .form-container{
            border: 2px solid black;
            width: 100%;
          }
          
          .form-center{
            text-align: center;
          }
        `}
      </style>
      
      <div>
        <Header title={title}></Header>
      </div>
      
      <div>
        <h1>船検索</h1>
      </div>

      <div>
        <Link href='/shipinsert'> {/* import Link from 'next/link'を入れる */}
          <button>新規作成</button>
        </Link>
      </div>

      <div>
        <table>
          <thead>
          <tr>
              <th>造船所</th>
              <td></td>
              <th>船番</th>
              <td></td>
              <th>取引先</th>
              <td></td>
              <th>シリーズ</th>
              <td></td>
              <th>船名</th>
              <td></td>
              <th>船船管理会社</th>
            </tr>
            <tr>
            <td><input className='form-container' type='text' name="zosenjo"></input></td>
            <td></td>
            <td><input className='form-container' type='text' name="hunaban"></input></td>
            <td></td>
            <td><input className='form-container' type='text' name="torihikisaki"></input></td>
            <td></td>
            <td><input className='form-container' type='text' name="sirizu"></input></td>
            <td></td>
            <td><input className='form-container' type='text' name="hunamei"></input></td>
            <td></td>
            <td><input className='form-container' type='text' name="hunesenkanrigaisya"></input></td>
            </tr>

            <tr>
              <th  colSpan="3">船種</th>
              <td></td>
              <th colSpan="3">船籍</th>
              <td></td>
              <th>船級</th>
              <td></td>
              <th>船船タイプ</th>
            </tr>
            <tr>
            <td colSpan="3"><input className='form-container' type='text' name="hunesyu"></input></td>
            <td></td>
            <td  colSpan="3"><input className='form-container' type='text' name="huneseki"></input></td>
            <td></td>
            <td><input className='form-container' type='text' name="hunekyuu"></input></td>
            <td></td>
            <td><input className='form-container' type='text' name="hunesentaipu"></input></td>
            </tr>

            <tr>
              <th></th>
              <td></td>
              <th>重量(GT)</th>
              <td></td>
              <th></th>
              <td></td>
              <th>IMONo</th>
            </tr>
            <tr>
            <td><input className='form-container' type='text' name="juuryoukagen"></input></td>
            <td></td>
            <td><p className='form-center'>～</p></td>
            <td></td>
            <td><input className='form-container' type='text' name="juuryoujougen"></input></td>
            <td></td>
            <td><input className='form-container' type='text' name="imono"></input></td>
            </tr>

            <tr>
              <th></th>
              <td></td>
              <th>製造年月</th>
              <td></td>
              <th></th>
              <td></td>
              <th>F-ShipNo</th>
              <td></td>
            </tr>
            <tr>
            <td><input className='form-container' type='text' name="seizounengetuhazime"></input></td>
            <td></td>
            <td><p className='form-center'>～</p></td>
            <td></td>
            <td><input className='form-container' type='text' name="seizounengetuowari"></input></td>
            <td></td>
            <td><input className='form-container' type='text' name="f-shipno"></input></td>
            <td></td>
            <td><input type='checkbox' name="ronrisakujo" />論理削除表示:含</td>
            <td></td>
            <td><input type='checkbox' name="onahenkou" />オーナー変更：有</td>
            </tr>

          </thead>
        </table>
      </div>

      <div>
        <button href='/api'>検索</button>
      </div>

      <div>
      <tr>
        <th>ステータス</th>
        <td></td>
        <th>移動品目</th>
        <td></td>
        <th>装備</th>
        <td></td>
        <th>F-ShipNo</th>
        <td></td>
        <th>造船所</th>
        <td></td>
        <th>船番</th>
        <td></td>
        <th>シリーズ</th>
        <td></td>
        <th>取引先</th>
        <td></td>
        <th>船名</th>
        <td></td>
        <th>船種(Seaweb)</th>
        <td></td>
        <th>船種</th>
        <td></td>
        <th>船級</th>
        <td></td>
        <th>IMONo</th>
        <td></td>
        <th>更新者</th>
        <td></td>
        <th>更新日時</th>
        <td></td>
        </tr>
      </div>

    </div>
  );
}
