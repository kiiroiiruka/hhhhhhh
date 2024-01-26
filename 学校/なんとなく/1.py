import sqlite3 #
import tkinter as tk

root = tk.Tk()
root.title('saizeriya 商品名・値段検索')
root.geometry('370x80')

label1 = tk.Label(root,text='ID',width=40)
label2 = tk.Label(root,text='商品名')
label3 = tk.Label(root,text='値段')

label1.grid(row=0,column=0)
label2.grid(row=1,column=0)
label3.grid(row=1,column=1)

label2_out =tk.Label(root,text='****',relief=tk.SOLID)
label3_out =tk.Label(root,text='0',relief=tk.SOLID)
label2_out.grid(row=2,column=0)
label3_out.grid(row=2,column=1)

txt =tk.Entry(width=6)
txt.grid(row=0,column=1)

def click():
    conn = sqlite3.connect('saizeriya.db')
    cur = conn.cursor()
    cur.execute("select*from item,price where item.id =price.id and item.id='"+ txt.get() +"'")
    for row in cur:
        label2_out['text'] = row[1]
        label3_out['text'] = row[3]
    conn.close()

btn =tk.Button(root,text='検索',command=click)
btn.grid(row=0,column=2)

root.mainloop()
