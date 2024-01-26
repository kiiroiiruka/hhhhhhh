using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class move1 : MonoBehaviour
{




  
    
    void Start() {



        // void ChangeScene()

    }
    void Update()
    {
        if (Input.GetKey (KeyCode.LeftArrow)) {
           this.transform.Translate (-0.1f,0.0f,0.0f);
        }
       // 右に移動
       if (Input.GetKey (KeyCode.RightArrow)) {
            this.transform.Translate (0.1f,0.0f,0.0f);
        }
       // 前に移動
        if (Input.GetKey (KeyCode.UpArrow)) {
           this.transform.Translate (0.0f,0.0f,0.1f);
        }
        // 後ろに移動
       if (Input.GetKey (KeyCode.DownArrow)) {
           this.transform.Translate (0.0f,0.0f,-0.1f);
       }
        /*if (Input.GetKey(KeyCode.RightArrow))
        {
            transform.position = new Vector3(posx+0.1f, posy-0f, 0f);
        }else if  (Input.GetKey(KeyCode.LeftArrow))
        {
            transform.position = new Vector3(posx-0.1f,posy-0f, 0f);
        }
        else if  (Input.GetKey(KeyCode.UpArrow))
        {
            transform.position = new Vector3(posx-0f, posy+0.1f, 0f);
        }else if  (Input.GetKey(KeyCode.DownArrow))
        {
            transform.position = new Vector3(posx-0f,  posy-0.1f, 0f);
        }else 
        {
            transform.position = new Vector3(posx-0f, posy-0f, 0f);
        }*/

    }

 

}
	
