 
	<div id="el-zapros">
        <p>Заполните форму электронной подачи заявки</p>
        <p class="exit"><span>+</span></p>
        <form class="desktop" action="<?php echo get_template_directory_uri(); ?>/success.php" method="post" enctype="multipart/form-data">
            <table>
                <tr>
                    <td class="cell-text">Название компании, на имя которой разрабатывается Паспорт безопасности (Изготовитель, Поставщик 
                        или Продавец продукции )*</td>
                    <td><input type="text" name="organization" placeholder="Введите название организации" required></td>
                </tr>
                <tr>
                    <td class="cell-text">Наименование компании, направляющей запрос (заполняется только посреднической организацией)</td>
                    <td><input type="text" name="posrednik" placeholder="Введите название организации"></td>
                </tr>
                <tr>
                    <td class="cell-text">Электронная почта*</td>
                    <td><input type="email" name="email" placeholder="Введите Ваш e-mail*" required></td>
                </tr>
                <tr>
                    <td class="cell-text">Контактный телефон*</td>
                    <td><input type="tel" name="phone" placeholder="+ 7 (_ _ _) - (_ _ _) - (_ _) - (_ _)" required></td>
                </tr>
                <tr>
                    <td class="cell-text">Контактное лицо*</td>
                    <td><input type="text" name="name" placeholder="Введите ФИО контактного лица" required></td>
                </tr> 
                <tr>
                    <td class="cell-text">Наименование продукции*</td>
                    <td><input type="text" name="product" placeholder="Введите перечень продукции" required></td>
                </tr>  
                <tr>
                    <td class="cell-text">Нормативный документ, по которому выпускается продукция (ГОСТ, ТУ, СТО, (M) SDS)</td>
                    <td>
                        <div class="image-upload"> 
                            <label for="file-input1">
                                <img src="<?php bloginfo(template_url); ?>/img/load.png"/><p>Прикрепить файл документа</p>
                            </label>
                            <input id="file-input1" type="file" name="document">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="cell-text">Информационное письмо о составе продукции</td>
                    <td>
                        <div class="image-upload"> 
                            <label for="file-input2">
                                <img src="<?php bloginfo(template_url); ?>/img/load.png"/><p>Прикрепить файл документа</p>
                            </label>
                            <input id="file-input2" type="file" name="product-list">
                        </div>
                    </td>
                </tr> 
                <tr>
                    <td class="cell-text">Карта партнера (для составления договора)</td>
                    <td>
                        <div class="image-upload"> 
                            <label for="file-input3">
                                <img src="<?php bloginfo(template_url); ?>/img/load.png"/><p>Прикрепить файл документа</p>
                            </label>
                            <input id="file-input3" type="file" name="partner-map">
                        </div>
                    </td>
                </tr> 
                <tr>
                    <td class="cell-text">Доверенность (в случае, если заявку подает посредническая организация)</td>
                    <td>
                        <div class="image-upload"> 
                            <label for="file-input4">
                                <img src="<?php bloginfo(template_url); ?>/img/load.png"/><p>Прикрепить файл документа</p>
                            </label>
                            <input id="file-input4" type="file" name="doverenost">
                        </div>
                    </td>
                </tr>  
                <tr>
                    <td class="cell-text last">Ваш комментарий*</td>
                    <td><textarea type="text" name="comment" placeholder="Напишите свой комментарий" required></textarea></td>
                </tr>                                                                  
            </table>
            <p class="sub-text">* - поля, обязательные для заполнения</p>   
            <div class="button__containerrow">
                <button name="submit" type='submit'>Отправить</button>
            </div>                                
        </form>
		
		
		
		<form class="mobile" action="<?php echo get_template_directory_uri(); ?>/success.php" method="post" enctype="multipart/form-data">
            <table>
                <tr>
                    <td class="cell-text">Название компании, на имя которой разрабатывается Паспорт безопасности (Изготовитель, Поставщик 
                        или Продавец продукции )*</td>                    
                </tr>
				<tr>
					<td><input type="text" name="organization" placeholder="Введите название организации" required></td>
				</tr>
                <tr>
                    <td class="cell-text">Наименование компании, направляющей запрос (заполняется только посреднической организацией)</td>
                </tr>
				<tr>
					<td><input type="text" name="posrednik" placeholder="Введите название организации"></td>
				</tr>
                <tr>
                    <td class="cell-text">Электронная почта*</td>                    
                </tr>
				<tr>
					<td><input type="email" name="email" placeholder="Введите Ваш e-mail*" required></td>
				</tr>
                <tr>
                    <td class="cell-text">Контактный телефон*</td>
                    
                </tr>
				<tr>
					<td><input type="tel" name="phone" placeholder="+ 7 (_ _ _) - (_ _ _) - (_ _) - (_ _)" required></td>
				</tr>
                <tr>
                    <td class="cell-text">Контактное лицо*</td>  
                </tr> 
				<tr>
					<td><input type="text" name="name" placeholder="Введите ФИО контактного лица" required></td>
				</tr>
                <tr>
                    <td class="cell-text">Наименование продукции*</td>                  
                </tr>  
				<tr>
					<td><input type="text" name="product" placeholder="Введите перечень продукции" required></td>
				</tr>
                <tr>
                    <td class="cell-text">Нормативный документ, по которому выпускается продукция (ГОСТ, ТУ, СТО, (M) SDS)</td>
                </tr>
				<tr>
                    <td>
                        <div class="image-upload"> 
                            <label for="file-input1">
                                <img src="<?php bloginfo(template_url); ?>/img/load.png"/><p>Прикрепить файл документа</p>
                            </label>
                            <input id="file-input1" type="file" name="document">
                        </div>
                    </td>
				</tr>
                <tr>
                    <td class="cell-text">Информационное письмо о составе продукции</td>
                </tr> 
				<tr>
					<td>
                        <div class="image-upload"> 
                            <label for="file-input2">
                                <img src="<?php bloginfo(template_url); ?>/img/load.png"/><p>Прикрепить файл документа</p>
                            </label>
                            <input id="file-input2" type="file" name="product-list">
                        </div>
                    </td>			
				</tr>
                <tr>
                    <td class="cell-text">Карта партнера (для составления договора)</td>
                </tr> 
				<tr>		
                    <td>
                        <div class="image-upload"> 
                            <label for="file-input3">
                                <img src="<?php bloginfo(template_url); ?>/img/load.png"/><p>Прикрепить файл документа</p>
                            </label>
                            <input id="file-input3" type="file" name="partner-map">
                        </div>
                    </td>				
				</tr>
                <tr>
                    <td class="cell-text">Доверенность (в случае, если заявку подает посредническая организация)</td>
                </tr> 
				<tr>				
                    <td>
                        <div class="image-upload"> 
                            <label for="file-input4">
                                <img src="<?php bloginfo(template_url); ?>/img/load.png"/><p>Прикрепить файл документа</p>
                            </label>
                            <input id="file-input4" type="file" name="doverenost">
                        </div>
                    </td>				
				</tr>
                <tr>
                    <td class="cell-text last">Ваш комментарий*</td>
                    
                </tr> 
				<tr>
					<td><textarea type="text" name="comment" placeholder="Напишите свой комментарий" required></textarea></td>				
				</tr>
            </table>
            <p class="sub-text">* - поля, обязательные для заполнения</p>   
            <div class="button__containerrow">
                <button name="submit" type='submit'>Отправить</button>
            </div>                                
        </form>
    </div> 