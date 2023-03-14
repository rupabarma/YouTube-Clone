export const convertViewsToString = (views) => {
    let viewString = views
    if (views >= 1_000_000){
      if (parseInt((views / 1_000_000).toFixed(1)) == parseInt((views / 1_000_000).toFixed(0))) {
        return (views / 1_000_000).toFixed(0) + 'M'
      }
      viewString = (views / 1_000_000).toFixed(1) + 'M'
      return viewString
    } else if (views > 1_000 && views < 1_000_000){
      viewString = (views / 1_000).toFixed(2) + 'k'
      return viewString
    }return viewString
}