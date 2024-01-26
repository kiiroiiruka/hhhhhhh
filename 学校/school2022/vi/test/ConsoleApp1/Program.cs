using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            Person p1 = new Person();
            p1.aaa("神様",11);
            p1.bbb();
            Console.WriteLine("ただのひょうじ{0}",p1.age);
            p1.age = 100;
            Console.WriteLine("ただのひょうじ{0}", p1.age);

            //Person p1,p2;
            //Person p1=new Person();//使いたいクラス名
            //p2 = new Person();
            //p1.age = 19;
            //p1.name = "山田太郎";
            //p2.SetAgeAndName("佐藤花子", 23);
            //p1.ShowAgeAndName();
            //p2.ShowAgeAndName();
            //Console.Write("文字を入力してください");
            //string str = Console.ReadLine();
            //Console.WriteLine("文字の長さを：{0}",str.Length);
            Console.ReadKey();
        }// 引数の個数で分別することも可能。
    }
}


// 引数の個数で分別することも可能。例）→a(a);  と　a(a,b)



// クラスの主な使い方↓

// クラス名 新しいクラス名 = new クラス名;←あるクラスを複製するときの書き方（クラス複製①）
// 新クラス名.クラスのフィールド＝[複製したところに入れる値]（複製したクラスの設定②）
// 新クラス名.メソッド名();←メソッドを使って動作させる③

// ①クラス複製→②複製したクラスの設定→③メソッドを使って動作させる




// ○○=新クラス名.使いたいプロパティ名;(プロパティにreturn ;があれば○○にreturn の右の値が入る)　プロパティ、関数の使い方
// メソッド内→（）｛this.そのクラスのフィールド名；｝←フィールドの設定をするメソッドの作り方　  フィールドの設定の仕方
// 関数の機能を使うとき→その関数があるクラス名.関数名(); 関数内の処理の例→　　新クラス名（）{　 Console.WriteLine("文字の長さを");}　関数の使い方//引数を入れたい場合はかっこの中にも数字を入れる。




// クラスの主な使い方(2パターン目)↓


// クラス[]　新クラス名=クラス[作りたい個数];　←クラスを一気に複製させて使うとき（配列使った場合）①
// 新クラス名[0]=new クラス();←その新クラスのフィールド設定の仕方② [1]と[2]も同様
// 新クラス名[0].使いたい関数():←配列じゃない時と後は同様

 //   プログラムのつくりかた　クラスのプログラムの作成→クラスと連携したプログラムの作成→クラス複製→フィールド設定→動作


