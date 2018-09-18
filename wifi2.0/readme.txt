1、若要修改网页总标题，

    在index.html中修改“<title>Wi-Fi模块</title>”。

2、若要修改网页内房间名字，

    在js文件夹中的click.js中修改五条
    “document.getElementById('logo').innerHTML = "wifi1";”。

3、若要修改背景图片，

    于images文件夹中放入图片，图片名字命名为‘[数字].jpg’，注意大小写，
    并在js文件夹中site.js“for (var i=1; i <= 3; i++){”修改图片数量。

4、将wifi所传的数据传在index.html中

    <p id="str" style="display: none;">...</p>中。
    格式如下：
          <p id="str" style="display: none;">
          <br>ID：0001 69RH 27.C
            (2018/6/5 9:14:38);
          <br>ID：0002 00RH 00.C
            (2018/6/5 9:15:54);
          <br>ID：0003 68RH 25.C
            (2018/6/5 9:16:22);
          <br>ID：0004 04RH 4.C
            (2018/6/5 9:42:50);
          </p>

5、如有其他疑问，联系开发者本人！
