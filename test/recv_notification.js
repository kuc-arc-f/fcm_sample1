//
function recv_pushMessage(title, body){
    if (!('Notification' in window)) {//対応してない場合
        alert('未対応のブラウザです');
    }
    else {
        // 許可を求める
        Notification.requestPermission()
        .then((permission) => {
            if (permission === 'granted') {// 許可
                var options ={
                    body: body,
                    icon: 'http://localhost/icon1.png',
                    tag: ''
                }
                var n = new Notification(title,options);
                console.log(n);
                setTimeout(n.close.bind(n), 5000);
            }
            else if (permission == 'denied') {// 拒否
            }
            else if (permission == 'default') {// 無視
            }
        });
    }  
}