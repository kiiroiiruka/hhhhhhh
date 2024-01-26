using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Person
    {
        public string name;
        public int age;
        public void aaa(string name, int age)
        {
            this.name = name;
            this.age = age;
        }
        public void bbb()
        {
            Console.WriteLine("{0}{1}", name, age);
        }
        /*private string name = "";
        private int age = 0;
        /*
        public int Add(int a, int b)
        {
            return a + b;
        }
        public int Add(int a, int b, int c)
        {
            return a + b + c;
        }
        
      public void ShowAgeAndName(string name, int age)
        {
            Console.WriteLine("名前：{0}年齢{1}", name, age);
        }

        public void SetAgeAndName(string name,int age)
        {
            this.name = name;
            this.age = age;
        }
        public string Name//←プログラムのNameの部分がreturnの値になる
        {
            set{ name =value; }//
            get { return name; }//
        }*/

    }
}
