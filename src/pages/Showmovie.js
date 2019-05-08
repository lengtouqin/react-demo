import React from 'react';
import http from '../utils/http';
import {HashRouter as Router, Route, Link} from "react-router-dom";

class Movie extends React.Component{
    constructor(){
        super();
        this.state={
            movielist:[]
        }
    }
    render(){
        return(
            <Router>
                {
                }
            </Router>
        )

    }
    getmovie(){
        http.get("/h5/mtop.film.mtopshowapi.getshowsbycitycode/4.0/?jsv=2.5.1&appKey=12574478&t=1557225622669&sign=1ff4caacc94ba8fd71778f8c2a984194&api=mtop.film.MtopShowAPI.getShowsByCityCode&v=4.0&timeout=10000&expire_time=180000&forceAntiCreep=true&AntiCreep=true&type=jsonp&dataType=jsonp&callback=mtopjsonp5&data=%7B%22field%22%3A%22i%3Aid%3Bposter%3BshowName%3BshowMark%3Bremark%3BpreScheduleRemark%3Bdirector%3BleadingRole%3BpreviewNum%3BopenDay%3BopenTime%3BwantCount%3Bfantastic%3BspecialSchedules(i%3Aid%3Btag%3Btitle%3Bdescription)%3BderivationList(i%3Aid%3Blabel%3Btitle%3Blinks%3BadvertiseType)%3Bactivities(i%3Aid%3BactivityTag%3BactivityExtType%3BactivityTitle%3BlongDescription)%3Btype%3Bduration%3Bcountry%3BopenCountry%3BfriendCount%3Bfriends%3BstarMeeting%3BpreScheduleDates%3BsoldTitle%3BsoldType%3BscoreAndFavor%22%2C%22pageIndex%22%3A1%2C%22pagesize%22%3A10%2C%22citycode%22%3A%22440300%22%2C%22pageCode%22%3A%22APP_SHOW%22%2C%22platform%22%3A%228%22%7D"
        ).then(res => {
            let data = res.data;
            if (data.returnCode === 0) {
              this.state.movielist = data.data.returnValue;
            } else {
              
            }
          })
    }
    componentDidMount(){
        this.getmovie()
    }

}
export default Movie;