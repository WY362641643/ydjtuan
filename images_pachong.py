import requests
import urllib.parse as up
import re

urls= [
    'http://www.ydjituan.com/hxtd/',
    'http://www.ydjituan.com/hzhb/',
    'http://www.ydjituan.com/xwzx/jtdt/',
    'http://www.ydjituan.com/lxwm/',
    'http://www.ydjituan.com/rczp/'
]

for url in urls:
    res=requests.get(url)
    res.encoding='urf-8'
    html = res.text
    img_urls = re.findall('<img src="(.*?)"',html,re.S)
    wjj=url.split('/')[-2]
    for img_url in img_urls:
        wj = img_url.split('/')[-1]
        imgurl=up.urljoin(url,img_url)
        res = requests.get(imgurl)
        img = res.content
        with open('static/images/{0}/{1}'.format(wjj,wj),'wb') as f:
            f.write(img)