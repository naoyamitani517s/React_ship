'use client'; //style jsx を使うときにはこれを入れないといけない

import Header from '../header'
import Link from 'next/link'
import axios from 'axios';
import { useState } from 'react';

export default function Home() {

  let title = "船検索"
  const [formData, setFormData] = useState({
    shipyardcode: "",
    shipnumber: "",
    customercode: "",
    series: "",
    shipnameen: "",
    furunorescompany: "",
    shipspecies: "",
    shipnationality: "",
    shipclass: "",
    shiptype: "",
    grosstonnageForm: "",
    grosstonnageTo: "",
    imono: "",
    builddateFrom: "",
    builddateTo: "",
    f_shipno: "",
    registeredowner: ""
  });

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const ClearData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value ==="" ? null: value])
    );
    try {
      console.log("ClearData:", ClearData)
      const response = await axios.post('http://192.168.56.1:8080/Ship/search', ClearData);
      // console.log("検索結果:", response.data)
      // APIの結果をステートに保存
      setResults(response.data);
    } catch (error) {
      // console.log("Error Response", error.response);
      // console.log("Error message", error.message);
      // console.error('検索エラー:', error);
    }
  };
  
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
        <form onSubmit={handleSubmit}>
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
              <td><input value={formData.shipyardcode} onChange={handleChange} className='form-container' type='text' name="shipyardcode"></input></td>
              <td></td>
              <td><input value={formData.shipnumber} onChange={handleChange} className='form-container' type='text' name="shipnumber"></input></td>
              <td></td>
              <td><input value={formData.customercode} onChange={handleChange} className='form-container' type='text' name="customercode"></input></td>
              <td></td>
              <td><input value={formData.series} onChange={handleChange} className='form-container' type='text' name="series"></input></td>
              <td></td>
              <td><input value={formData.shipnameen} onChange={handleChange} className='form-container' type='text' name="shipnameen"></input></td>
              <td></td>
              <td><input value={formData.furunorescompany} onChange={handleChange} className='form-container' type='text' name="furunorescompany"></input></td>
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
              <td colSpan="3"><input value={formData.shipspecies} onChange={handleChange}  className='form-container' type='text' name="shipspecies"></input></td>
              <td></td>
              <td  colSpan="3"><input value={formData.shipnationality} onChange={handleChange}  className='form-container' type='text' name="shipnationality"></input></td>
              <td></td>
              <td><input value={formData.shipclass} onChange={handleChange} className='form-container' type='text' name="shipclass"></input></td>
              <td></td>
              <td><input value={formData.shiptype} onChange={handleChange} className='form-container' type='text' name="shiptype"></input></td>
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
              <td><input value={formData.grosstonnageForm} onChange={handleChange} className='form-container' type='text' name="grosstonnageForm"></input></td>
              <td></td>
              <td><p className='form-center'>～</p></td>
              <td></td>
              <td><input value={formData.grosstonnageTo} onChange={handleChange} className='form-container' type='text' name="grosstonnageTo"></input></td>
              <td></td>
              <td><input value={formData.imono} onChange={handleChange} className='form-container' type='text' name="imono"></input></td>
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
              <td><input value={formData.builddateFrom} onChange={handleChange}  className='form-container' type='text' name="builddateFrom"></input></td>
              <td></td>
              <td><p className='form-center'>～</p></td>
              <td></td>
              <td><input value={formData.builddateTo} onChange={handleChange}  className='form-container' type='text' name="builddateTo"></input></td>
              <td></td>
              <td><input value={formData.f_shipno} onChange={handleChange}  className='form-container' type='text' name="f_shipno"></input></td>
              <td></td>
              <td><input type='checkbox' name="ronrisakujo" />論理削除表示:含</td>
              <td></td>
              <td><input value={formData.registeredowner} onChange={handleChange}  type='checkbox' name="registeredowner" />オーナー変更：有</td>
              </tr>
            </thead>
          </table>

          <div>
            <button type="submit">検索</button>
          </div>
        </form>
      </div>
      
      <div>
        <table>
          <thead>
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
          </thead>
        </table>
      </div>

      <div>
        <ul>
          {results.map((result, index) => (
            <th key={index}style={{ border: "1px solid black", padding: "8px" }}>
              
            </th>
          ))}
        </ul>
      </div>
      

    </div>
  );
}
