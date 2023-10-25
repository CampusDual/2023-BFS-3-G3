
package com.campusdual.backend.model.core.service;

import com.campusdual.backend.api.core.service.ICategoryService;
import com.campusdual.backend.model.core.dao.CategoryDao;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Lazy
@Service("CategoryService")
public class CategoryService implements ICategoryService {

    @Autowired
    private CategoryDao categoryDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult categoryInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.categoryDao, attributes);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult categoryUpdate(Map<String, Object> attributes, Map<String, Object> keyValues)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.categoryDao, attributes, keyValues);
    }

    @Override
    public EntityResult categoryQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(categoryDao, keyMap, attrList);
    }

    @Override
    public EntityResult categoryDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.categoryDao, keyMap);
    }
}
