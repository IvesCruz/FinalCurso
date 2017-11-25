<?php
namespace Produto\entidades;

class Produto{
    
    private $id;
    private $linha;
    private $modelo;
    private $temp_condesacao;
    private $temp_evaporacao;
    private $capa_nominal;
    private $pot_compressor;
    
    public function __construct($id = 0,$linha= "" ,$modelo= "" ,$temp_condesacao= "" ,$temp_evaporacao= "" ,$capa_nominal= "" ,$pot_compressor= "" ){
        $this->id = $id;
        $this->linha = $linha;
        $this->modelo = $modelo;
        $this->temp_condesacao = $temp_condesacao;
        $this->temp_evaporacao = $temp_evaporacao;
        $this->capa_nominal = $capa_nominal;
        $this->pot_compressor = $pot_compressor;
    }
    
    public static function construct($array){
        $obj = new Produto();
        $obj->setId( $array['id']);
        $obj->setLinha( $array['linha']);
        $obj->setModelo( $array['modelo']);
        $obj->setTemp_condesacao( $array['temp_condesacao']);
        $obj->setTemp_evaporacao( $array['temp_evaporacao']);
        $obj->setCapa_nominal( $array['capa_nominal']);
        $obj->setPot_compressor( $array['pot_compressor']);
        return $obj;
    }
    
    public function getId(){
        return $this->id;
    }
    
    public function setId($id){
        $this->id=$id;
    }
    
    public function getLinha(){
        return $this->linha;
    }
    
    public function setLinha($linha){
        $this->linha=$linha;
    }
    
    public function getModelo(){
        return $this->modelo;
    }
    
    public function setModelo($modelo){
        $this->modelo=$modelo;
    }
    
    public function getTemp_condesacao(){
        return $this->temp_condesacao;
    }
    
    public function setTemp_condesacao($temp_condesacao){
        $this->temp_condesacao=$temp_condesacao;
    }
    
    public function getTemp_evaporacao(){
        return $this->temp_evaporacao;
    }
    
    public function setTemp_evaporacao($temp_evaporacao){
        $this->temp_evaporacao=$temp_evaporacao;
    }
    
    public function getCapa_nominal(){
        return $this->capa_nominal;
    }
    
    public function setCapa_nominal($capa_nominal){
        $this->capa_nominal=$capa_nominal;
    }
    
    public function getPot_compressor(){
        return $this->pot_compressor;
    }
    
    public function setPot_compressor($pot_compressor){
        $this->pot_compressor=$pot_compressor;
    }
    public function equals($object){
        if($object instanceof Produto){
        
        if($this->id!=$object->id){
            return false;
    }
    
    if($this->linha!=$object->linha){
        return false;
    }
    
    if($this->modelo!=$object->modelo){
        return false;
    }
    
    if($this->temp_condesacao!=$object->temp_condesacao){
        return false;
    }
    
    if($this->temp_evaporacao!=$object->temp_evaporacao){
        return false;
    }
    
    if($this->capa_nominal!=$object->capa_nominal){
        return false;
    }
    
    if($this->pot_compressor!=$object->pot_compressor){
        return false;
    }
    
        return true;
    
    }
    else{
    return false;
    }
    
    }
    
    public function toString(){
        return "  [id:" .$this->id. "]  [linha:" .$this->linha. "]  [modelo:" .$this->modelo. "]  [temp_condesacao:" .$this->temp_condesacao. "]  [temp_evaporacao:" .$this->temp_evaporacao. "]  [capa_nominal:" .$this->capa_nominal. "]  [pot_compressor:" .$this->pot_compressor. "]  " ;
    }
}

?> 