<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Authtoken extends Model
{
    protected $table='authtokens';
    protected $primaryKey='token_id';
    public $timestamps=false;
    use HasFactory;

    public function account()
    {
        return $this->belongsTo(Account::class,'acc_id');
    }
}
