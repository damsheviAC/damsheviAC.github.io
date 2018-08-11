<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "books".
 *
 * @property int $id
 * @property string $title
 * @property string $author
 * @property string $date
 * @property int $isbn
 */
class Books extends \yii\db\ActiveRecord
{

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'books';
    }

    public function getCategories() {
      return $this->hasOne(Categories::className(), ['books_sub_id' => 'sub_id']);
    }
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'author', 'date', 'isbn'], 'required'],
            [['date'], 'safe'],
            [['id'], 'safe'],
            [['isbn'], 'integer'],
            [['title', 'author', 'sub_id'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'sub_id' => 'Наименование рубрики',
            'title' => 'Наименование',
            'author' => 'Автор',
            'date' => 'Дата публикации',
            'isbn' => 'ISBN',
        ];
    }

}
