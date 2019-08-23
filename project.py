from flask import Flask,render_template

app = Flask(__name__)

# 首页
@app.route('/')
def hello_world():
    return render_template('index.html')

# 集团简介
@app.route('/jtjj/')
def jtjj():
    return render_template('jtjj.html')

# 集团业务/元典科技
@app.route('/jtyw/')
@app.route('/jtyw/ydkj/')
def jtyw():
    return render_template('jtyw.html')

# 千享科技
@app.route('/jtyw/qxkj/')
def jtyw_qxkj():
    return render_template('qxkj.html')

# 望海水产
@app.route('/jtyw/whsc/')
def whsc():
    return render_template('whsc.html')

# 壹典摄影
@app.route('/jtyw/yidian/')
def yidian():
    return render_template('ydsy.html')

# 核心团队
@app.route('/hxtd/')
def hxtd():
    return render_template('hxtd.html')

# 合作伙伴
@app.route('/hzhb/')
def hzhb():
    return render_template('hzhb.html')

# 集团动态
@app.route('/xwzx/jtdt/')
def xwzx_jtdt():
    return render_template('jtdt.html')

# 联系我们
@app.route('/lxwm/')
def lxwm():
    return render_template('lxwm.html')

# 人才招聘
@app.route('/rczp/')
def rczp():
    return render_template('rczp.html')


if __name__ == '__main__':
    app.run()
