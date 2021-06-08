import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/actions/filter';
import line from '../../assets/img/line.png';

const Filter = React.memo(({ visibleFilter }) => {
  const dispatch = useDispatch();
  const [inputBrand, changeInputBrand] = useState('');
  const [inputModel, changeInputModel] = useState('');
  const [inputArticle, changeInputArticle] = useState('');
  const [inputEngineValue, changeInputEngineValue] = useState('');
  const [itemValue, changeItemValue] = useState('');
  const [advanced, changeAdvanced] = useState(false);
  const filter = useSelector(({ search }) => search.filters);
  useEffect(() => {
    changeInputBrand(filter.brand);
    changeInputModel(filter.model);
    changeInputArticle(filter.article);
    changeInputEngineValue(filter.engine_value);
    changeItemValue(filter.item);
  }, [filter.article, filter.brand, filter.engine_value, filter.item, filter.model, advanced]);

  const filters = {
    brand: inputBrand,
    model: inputModel,
    article: inputArticle,
    engine_value: inputEngineValue,
    item: itemValue,
  };
  const advancedSettings = () => {
    changeAdvanced(!advanced);
  };
  const onSubmit = () => {
    dispatch(setFilter(filters));
  };
  const onClear = () => {
    const filtersClear = {
      brand: '',
      model: '',
      article: '',
      engine_value: '',
      item: '',
    };
    changeInputBrand('');
    changeInputModel('');
    changeInputArticle('');
    changeInputEngineValue('');
    changeItemValue('');
    dispatch(setFilter(filtersClear));
  };

  const onChangeItemValue = (value) => {
    changeAdvanced(true);
    changeItemValue(value);
  };

  return (
    <div className={!visibleFilter ? 'filter__body ' : 'filter__body active'}>
      <div className="filter__title">
        <h3>Підбір запчастин</h3>
      </div>
      <form className="filter__form">
        <p className="filter__input--name">Марка</p>
        <input
          className="filter__input--value"
          type="text"
          id="search-brand"
          onChange={(event) => changeInputBrand(event.target.value)}
          value={inputBrand}
        />
        <p className="filter__input--name">Модель</p>
        <input
          className="filter__input--value"
          type="text"
          id="search-model"
          onChange={(event) => changeInputModel(event.target.value)}
          value={inputModel}
        />
        <p className="filter__input--name">Артикул</p>
        <input
          className="filter__input--value"
          type="text"
          id="search-article"
          onChange={(event) => changeInputArticle(event.target.value)}
          value={inputArticle}
        />
        <p className="filter__input--name">Об'єм двигуна</p>
        <input
          className="filter__input--value"
          type="text"
          id="search-oem"
          onChange={(event) => changeInputEngineValue(event.target.value)}
          value={inputEngineValue}
        />

        <div className="items-settings">
          <div className="checkbox">
            <input
              className="custom-checkbox"
              type="checkbox"
              id="item-search"
              name="item-search"
              value="item-search"
              onChange={advancedSettings}
            />
            <label htmlFor="item-search" className="main-label">
              Запчастина
            </label>
          </div>
          <div className="item-search__input--wrapper">
            <input
              className={advanced ? 'item-search__input active' : 'item-search__input'}
              disabled={advanced ? false : true}
              type="text"
              id="search-item"
              onChange={(event) => changeItemValue(event.target.value)}
              value={itemValue}
            />
          </div>

          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="cd-dvd"
              name="items"
              value="cd-dvd"
              disabled={advanced ? false : true}
              onChange={() => changeItemValue('CD-чейнджер, CD-DVD')}
            />
            <label htmlFor="cd-dvd">CD-чейнджер, CD-DVD (122)</label>
          </div>

          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="bamper"
              name="items"
              value="bamper"
              disabled={advanced ? false : true}
              onChange={() => changeItemValue('Абсорбер бампера ')}
            />
            <label htmlFor="bamper">Абсорбер бампера (6)</label>
          </div>

          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="accumulator"
              name="items"
              value="accumulator"
              disabled={advanced ? false : true}
              onChange={() =>
                changeItemValue('Аккумуляторна батарея, конвертор, проводка, кріплення і інше')
              }
            />
            <label htmlFor="accumulator">
              Аккумуляторна батарея, конвертор, проводка, кріплення і інше (666)
            </label>
          </div>

          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="accesuars"
              name="items"
              value="accesuars"
              disabled={advanced ? false : true}
              onChange={() => changeItemValue('Аксесуари')}
            />
            <label htmlFor="accesuars">Аксесуари (6)</label>
          </div>

          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="unit-block"
              name="items"
              value="unit-block"
              disabled={advanced ? false : true}
              onChange={() =>
                changeItemValue('Активний стабілізатор поперечної стійкості, блок керування')
              }
            />
            <label htmlFor="unit-block">
              Активний стабілізатор поперечної стійкості, блок керування (8)
            </label>
          </div>
        </div>

        <div id="search" className="search--button" onClick={() => onSubmit()}>
          Шукати
        </div>
        <div id="reset" className="reset--button" onClick={() => onClear()}>
          Очистити
        </div>

        <div className="line">
          <img src={line} alt="" />
        </div>

        <div className="carmodels">
          <h4 className="carmodels--title">Марки авто</h4>
          <div className="carmodels__list">
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('Alfa Romeo')}>Alfa Romeo</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('Audi')}>Audi</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('BMW')}>BMW</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('Chrysler')}>Chrysler</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('Citroen')}>Citroen</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('Daewoo')}>Daewoo</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('Fiat')}>Fiat</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('Ford')}>Ford</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('Honda')}>Honda</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('Hyundai')}>Hyundai</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('Mazda')}>Mazda</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('Jeep')}>Jeep</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => changeInputBrand('Mercedes')}>Mercedes</span>
            </div>
          </div>
        </div>
        <div className="line">
          <img src={line} alt="" />
        </div>
        <div className="carmodels">
          <h4 className="carmodels--title custom--title">Запчастини</h4>
          <div className="carmodels__list">
            <div className="carmodels__list--item">
              <span onClick={() => onChangeItemValue('Абсорбер')}>Абсорбер (фільтр вуглевий)</span>
            </div>

            <div className="carmodels__list--item">
              <span onClick={() => onChangeItemValue('Автономний отоплювач')}>
                Автономний отоплювач
              </span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => onChangeItemValue('Активатор замку багажника')}>
                Активатор замку багажника
              </span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => onChangeItemValue('Активатор турбіни')}>Активатор турбіни</span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => onChangeItemValue('Амортизатор задній')}>
                Амортизатор задній
              </span>
            </div>
            <div className="carmodels__list--item">
              <span onClick={() => onChangeItemValue('Амортизатор передній')}>
                Амортизатор передній
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
});

export default Filter;
