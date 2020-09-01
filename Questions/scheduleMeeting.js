function schedule(calendar1,bound1,calendar2,bound2){
    const bound1Start = parseInt(bound1[0].split(':').join('')) 
    const bound2Start = parseInt(bound2[0].split(':').join('') )
    const bound1End = parseInt(bound1[1].split(':').join('')) 
    const bound2End = parseInt(bound2[1].split(':').join('')) 
    
  
    let startHour = bound1Start > bound2Start ? bound1Start : bound2Start
    let endHour = bound1End < bound2End ? bound1End : bound2End
  
    let available = []
    let mutual = []
  
    for(let t1=0; t1 < calendar1.length; t1++){
      const times1 = calendar1[t1]
      const t1meetingStart = parseInt(times1[0].split(':').join(''))
      const t1meetingEnd = parseInt(times1[1].split(':').join(''))
  
      if(t1==0 && t1meetingStart - startHour >= 100) available.push([startHour,t1meetingStart])  
  
      let t1nextMeeting = calendar1[t1+1]
      let t1nextMeetingStart
      let t1nextMeetingEnd
      if(t1nextMeeting){
        t1nextMeetingStart = parseInt(t1nextMeeting[0].split(':').join(''))
        t1nextMeetingEnd = parseInt(t1nextMeeting[1].split(':').join(''))
      }else{
        t1nextMeetingStart = endHour
      }
      if(t1nextMeetingStart - t1meetingEnd  >= 100){
        available.push([t1meetingEnd,t1nextMeetingStart])
      }
  
    }
  
    for(let t2=0; t2 < calendar2.length; t2++){
          const times2 = calendar2[t2]
          const t2meetingStart = parseInt(times2[0].split(':').join(''))
          const t2meetingEnd = parseInt(times2[1].split(':').join(''))
  
          if(t2==0 && t2meetingStart - startHour >= 100) available.push([startHour,t2meetingStart])  
          let t2nextMeeting = calendar2[t2+1]
          let t2nextMeetingStart
          let t2nextMeetingEnd
          if(t2nextMeeting){
            t2nextMeetingStart = parseInt(t2nextMeeting[0].split(':').join(''))
            t2nextMeetingEnd = parseInt(t2nextMeeting[1].split(':').join(''))
          }else{
            t2nextMeetingStart = endHour
          }
          if(t2nextMeetingStart - t2meetingEnd  >= 100){
            available.map( i => {
              if(i[1] - i[0] > t2meetingStart - t2meetingEnd){
                if(i[0] <= t2meetingEnd && t2meetingEnd  < i[1] && i[0] < t2nextMeetingStart && t2nextMeetingStart <= i[1]){
                  mutual.push([t2meetingEnd,t2nextMeetingStart])
                }
              }else{
                if( t2meetingEnd <= i[0]   && i[0] <= t2nextMeetingStart   && t2meetingEnd < i[1]  && i[1] <=t2nextMeetingStart ){
                    mutual.push([i[0],i[1]])
                  }
              }
            })
            
          }
         
        }
    
  
    return mutual
  
  }
  
 console.log( schedule(
    [['9:00','10:30'],['12:00','13:00'],['16:00','18:00']],
    ['9:00','20:00'],
    [['10:00','11:30'],['12:30','14:30'],['14:30','15:00'],['16:00','17:00']],
    ['10:00','18:30']
  ))