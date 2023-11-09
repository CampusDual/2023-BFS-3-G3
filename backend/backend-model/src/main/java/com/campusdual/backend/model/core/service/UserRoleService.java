package com.campusdual.backend.model.core.service;

import com.campusdual.backend.api.core.service.IUserRoleService;
import com.campusdual.backend.model.core.dao.UserDao;
import com.campusdual.backend.model.core.dao.UserRoleDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Lazy
@Service("UserRoleService")
public class UserRoleService implements IUserRoleService {
    @Autowired
    private UserRoleDao userRoleDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult userRoleQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(userRoleDao, keyMap, attrList);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult userRoleInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        Map<String, Object> nonUserRoleData = extractNonRelatedData(attrMap, UserDao.CITY, UserDao.ADDRESS, UserDao.EMAIL, UserDao.NAME, UserDao.SURNAME, UserDao.PHONE, UserDao.PASSWORD);
        attrMap.putAll(nonUserRoleData);
        return this.daoHelper.insert(userRoleDao, attrMap);
    }

    private Map<String, Object> extractNonRelatedData(Map<String, Object> attrMap, String... attrToExclude) {
        HashMap<String, Object> data = new HashMap<String, Object>();
        for (String attr : attrToExclude) {
            if (attrMap.containsKey(attr)) {
                data.put(attr, attrMap.remove(attr));
            }
        }
        return data;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult myUserRoleInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        Map<String, Object> userData = extractNonRelatedData(attrMap, UserDao.ID, UserDao.CITY, UserDao.ADDRESS, UserDao.EMAIL, UserDao.NAME, UserDao.SURNAME, UserDao.PHONE, UserDao.PASSWORD);
        EntityResult userResult = this.daoHelper.insert(userDao, userData);
        if (userResult.isWrong()) {
            return userResult;
        }
        Object user = userData.get(UserDao.ID);
        Object idRolename = attrMap.get("id_rolename");
        Map<String, Object> insertValues = new HashMap<>();
        insertValues.put(UserRoleDao.ID, user);
        insertValues.put(UserRoleDao.ID_ROLENAME, idRolename);
        return this.daoHelper.insert(userRoleDao, insertValues);
    }
}

