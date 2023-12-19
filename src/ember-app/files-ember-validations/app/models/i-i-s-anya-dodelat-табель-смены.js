import {
  defineNamespace,
  defineProjections,
  Model as ТабельСменыMixin
} from '../mixins/regenerated/models/i-i-s-anya-dodelat-табель-смены';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТабельСменыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
