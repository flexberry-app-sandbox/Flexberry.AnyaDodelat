import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицы: DS.attr('i-i-s-anya-dodelat-единицы'),
  количество: DS.attr('string'),
  товар: DS.belongsTo('i-i-s-anya-dodelat-товар', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-anya-dodelat-услуга', { inverse: 'составУслуги', async: false })
});

export let ValidationRules = {
  единицы: {
    descriptionKey: 'models.i-i-s-anya-dodelat-состав-услуги.validations.единицы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-anya-dodelat-состав-услуги.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-anya-dodelat-состав-услуги.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-anya-dodelat-состав-услуги.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставУслугиE', 'i-i-s-anya-dodelat-состав-услуги', {
    количество: attr('Количество', { index: 0 }),
    единицы: attr('Единицы', { index: 1 }),
    товар: belongsTo('i-i-s-anya-dodelat-товар', 'Товар', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });
};
