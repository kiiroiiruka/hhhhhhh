using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp4
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("英文を入力してください");
            string str = Console.ReadLine();
            Console.WriteLine("大文字：{0}",str.ToUpper());
            Console.WriteLine("小文字：{0}", str.ToUpper());
            Console.WriteLine();
            Console.ReadKey();
        }
    }
}
