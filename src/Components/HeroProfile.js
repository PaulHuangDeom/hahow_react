import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
const HeroProfile = (props) => {
  let {heroId} = useParams();
  const [profile, setProfile] = useState({});
  const [total, setTotal] = useState(0);
  const [remain, setRemain] = useState(0);

  useEffect(() => {
    getProfile();
  }, [heroId]);
  useEffect(() => {
    if (profile) {
      let valTotal = 0;
      const vals = Object.values(profile);
      vals.forEach(val => valTotal += val);
      setTotal(valTotal)
    }
  }, [profile])
  const getProfile = () =>　{
		axios.get(`http://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
		.then(res =>　setProfile(res.data))
		.catch(err => console.log(err))
  };
  const patchProfile = () => {
    axios.patch(`http://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, JSON.stringify(profile),{
      headers: {
        // 'Content-Type': 'application/json',
      }
    })
		.then(res =>　alert("ok"))
		.catch(err => console.log(err))
  };
  const addHandler = (key) => {
    if (remain === 0) return;

    setTotal(total + 1);
    setRemain(remain - 1);

    switch (key) {
      case "str":
        setProfile({...profile, str: profile.str + 1});
        break;
      case "int":
        setProfile({...profile, int: profile.int + 1});
        break;
      case "agi":
        setProfile({...profile, agi: profile.agi + 1});
        break;
      case "luk":
        setProfile({...profile, luk: profile.luk + 1});
        break;
      default:
        return;
    }
  };
  const subHandler = (key) => {
    if (total === 0 || profile[key] === 0) return;

    setTotal(total - 1);
    setRemain(remain + 1);

    switch (key) {
      case "str":
        setProfile({...profile, str: profile.str - 1});
        break;
      case "int":
        setProfile({...profile, int: profile.int - 1});
        break;
      case "agi":
        setProfile({...profile, agi: profile.agi - 1});
        break;
      case "luk":
        setProfile({...profile, luk: profile.luk - 1});
        break;
      default:
        return;
    }
  };
  return (
    <div className="hero_profile">
      <div className="hero_profile_info">
        {Object.keys(profile).map(item => {
          return (
            <div key={`profile_${item}`} className="info_item">
              <span className="text">{item.toUpperCase()}</span>
              <button className={remain === 0 ? 'add_btn btn_disabled' : 'add_btn'} onClick={() => addHandler(item)} disabled={remain === 0}>+</button>
              <span className="num">{profile[item]}</span>
              <button className={profile[item] === 0 ? 'sub_btn btn_disabled' : 'sub_btn'} onClick={() => subHandler(item)} disabled={profile[item] === 0}>-</button>
            </div>
          )
        })}
      </div>
      <div className="hero_profile_btn">
        <div className="pointer">剩餘點數: {remain}</div>
        <button className={remain !== 0 ? 'save_btn btn_disabled' : 'save_btn'} onClick={patchProfile} disabled={remain !== 0}>儲存</button>
      </div>
    </div>
  );
}

export default HeroProfile;